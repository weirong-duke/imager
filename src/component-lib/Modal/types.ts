import ComponentWithChildren from "types/ComponentWithChildren";

export type BaseModalProps = Partial<ComponentWithChildren> & {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}
