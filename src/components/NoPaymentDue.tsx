import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function NoPaymentDue() {
  return (
    <div className="relative bg-white h-full flex flex-col rounded-xl px-3 py-2">
      <h4 className="text-lg">No Payment Due</h4>
      <span className="text-base text-gray-400">You've paid your January balance.</span>
      <div className="absolute right-5 bottom-5">
            <div className="rounded-full w-10 h-10 bg-[#eeeeef] flex items-center justify-center">
                <FontAwesomeIcon size="1x" icon={faCheck} />
            </div>
        </div>
    </div>
  );
}
