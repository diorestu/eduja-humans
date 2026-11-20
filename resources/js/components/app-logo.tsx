export default function AppLogo() {
    return (
        <div className="flex h-8 items-center">
            {/* Expanded sidebar logo */}
            <div className="flex h-8 w-[7.625rem] items-center overflow-hidden group-data-[collapsible=icon]:hidden">
                <img
                    src="/logo.svg"
                    className="h-8 w-auto object-contain object-left dark:hidden"
                    alt="Eduja Humans"
                    width={122}
                    height={32}
                />
                <img
                    src="/logo-dark.svg"
                    className="hidden h-8 w-auto object-contain object-left dark:block"
                    alt="Eduja Humans"
                    width={122}
                    height={32}
                />
            </div>

            {/* Collapsed sidebar icon */}
            <div className="hidden size-8 items-center justify-center group-data-[collapsible=icon]:flex">
                <img
                    src="/logo-mark.svg"
                    className="size-7 rounded-lg object-contain"
                    alt="Eduja Humans"
                    width={28}
                    height={28}
                />
            </div>
        </div>
    );
}
