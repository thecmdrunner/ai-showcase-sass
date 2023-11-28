/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/navbar';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize';


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import GetInTouchModal from '@/components/ui/get-in-touch-modal';
import SignUp from '@/components/ui/sign-up';
import SignUpModal from '@/components/ui/sign-up-modal';
import { getProjectById } from '@/server/actions/projects';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

type PageProps = {
  params: { id: string[] };
};
async function Page({ params }: PageProps) {
  const availableForWork = true;
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const projectId = params.id[0];

  if (!projectId) {
    return notFound();
  }

  const projectDetails = await getProjectById(Number(projectId));

  if (!projectDetails) return notFound();

  const { project, dev, media } = projectDetails;
  const { title, description } = project;
  const { displayName, displayPictureUrl } = dev!;
  const video = media.find((m) => m.type === 'video');
  const images = media.filter((m) => m.type === 'image');
  const primaryMedia = video ? video : images[0];

  const initialLetter = displayName.charAt(0).toUpperCase();

  const userId = session?.user?.id;
  const isSameUser = project.userId === userId;

  console.log('userId', userId);

  return (
    <>
      <NavBar />

      <Dialog open={!userId}>
        <DialogContent className="h-screen w-full overflow-scroll md:h-max md:max-w-xl">
          <DialogHeader>
            <DialogTitle>Get Started</DialogTitle>
            <DialogDescription>
              Sign in with your Github or Google account.
            </DialogDescription>
          </DialogHeader>
          <SignUp />
        </DialogContent>
      </Dialog>

      <section className="flex min-h-feed items-start justify-center">
        <main className="mt-8 flex w-full flex-col justify-center px-4 md:w-3/4">
          <h1 className="mb-4 w-full text-left text-2xl font-semibold">
            {title}
          </h1>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={displayPictureUrl} alt={displayName} />
                <AvatarFallback> {initialLetter} </AvatarFallback>
              </Avatar>
              <div>
                <div className="mb-0.5 text-sm font-semibold">
                  {displayName}
                </div>
                <div className="flex items-center">
                  <div
                    className={
                      'h-2 w-2 ' +
                      (availableForWork ? 'bg-green-500' : 'bg-red-500') +
                      ' mr-2 rounded-full'
                    }
                  ></div>
                  {availableForWork ? (
                    <span className="text-xs text-green-500">
                      Available for work
                    </span>
                  ) : (
                    <span className="text-xs text-red-500">
                      Not available for work
                    </span>
                  )}
                </div>
              </div>
            </div>

            {!isSameUser && (
              <>
                {!userId ? null : (
                  <div className="flex gap-2">
                    <GetInTouchModal
                      username={displayName}
                      text="Get in Touch"
                      roundedFull={false}
                    />
                  </div>
                )}
              </>
            )}
          </div>

          {primaryMedia?.type === 'video' && (
            // h-500 w-900
            <div className="mb-8 aspect-video w-full max-w-lg overflow-hidden rounded-sm md:max-w-full">
              <video
                className="h-full w-full object-cover"
                src={primaryMedia.url}
                autoPlay={!!userId}
                controls
              />
            </div>
          )}

          {images.map((image, index) => (
            // h-500 w-900
            <div className="mb-8 overflow-hidden rounded-sm" key={image.id}>
              <img
                className="h-full w-full object-cover"
                src={image.url}
                alt={`${project.title} image ${index + 1} `}
              />
            </div>
          ))}

          <div className="mt-8">
            <Markdown 
            components={
              {
                h1: ({node, ...props}) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
                h2: ({node, ...props}) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />,
                h3: ({node, ...props}) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
                h4: ({node, ...props}) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
                code: ({node, ...props}) => <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />,
                p: ({node, ...props}) => <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />,
                ul: ({node, ...props}) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
              }
            }
            remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]}>
              {description}
            </Markdown>
          </div>

          {!isSameUser && (
            <div className="mt-6 flex w-full flex-col items-center justify-center border-t border-gray-500 py-8">
              <h3 className="text-xl font-medium">
                {' '}
                Liked {displayName}'s work??{' '}
              </h3>
              <p className="mb-4 mt-2 text-sm">
                Get in touch with {displayName} to discuss your project.
              </p>

              {!userId ? (
                <SignUpModal>
                  <Button variant="brand" className="mt-10 p-6">
                    Login in To Get in Touch
                  </Button>
                </SignUpModal>
              ) : (
                <GetInTouchModal username={displayName} text="Get in Touch" />
              )}
            </div>
          )}
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Page;
