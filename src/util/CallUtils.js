import CallStatusColors from '../data/CallStatusColors';

export const colorForCall = (call_info) => {
  let color = CallStatusColors.OPEN;
  if (!call_info.isOpen && !call_info.isCompleted) {
    color = CallStatusColors.COVERED;
  }
  if (call_info.isCompleted) {
    color = CallStatusColors.COMPLETE;
  }
  if (call_info.isCanceled) {
    color = CallStatusColors.CANCELED;
  }
  return color;
};