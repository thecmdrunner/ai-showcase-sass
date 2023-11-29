'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProjectUpload } from '@/components/ui/project-upload';
import { useState } from 'react';

type ProjectUploadModalProps = {
  children: React.ReactNode;
};

function ProjectUploadModal({ children }: ProjectUploadModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="md:max-h-3/4 h-screen min-w-full overflow-scroll md:h-max md:min-w-50">
        <DialogHeader>
          <DialogTitle>Upload Project</DialogTitle>
          <DialogDescription>
            Add and showcase your project to the community.
          </DialogDescription>
        </DialogHeader>
        <ProjectUpload setIsModalOpen={setIsModalOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default ProjectUploadModal;
