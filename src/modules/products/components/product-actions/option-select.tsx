import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div
        className="flex flex-wrap justify-between gap-2"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "h-10 rounded-md p-2 flex-1 text-sm font-medium transition-all duration-200",
                "border text-empire-brown bg-transparent",
                "hover:bg-empire-brown/5 dark:hover:bg-empire-sand/10",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-empire-gold",
                {
                  "border-empire-brown/50 dark:border-empire-taupe/50":
                    v !== current,
                  "border-empire-brown dark:border-empire-gold": v === current,
                  "text-empire-brown/60 dark:text-empire-taupe/60 dark:disabled:text-white/50":
                    disabled,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
