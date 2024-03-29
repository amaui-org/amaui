import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoFilled'

      short_name='FlashAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 11q-.425 0-.625-.288-.2-.287-.05-.687l2.75-7.275q.125-.3.425-.525.3-.225.65-.225.325 0 .638.225.312.225.437.525l2.775 7.275q.15.4-.05.687-.2.288-.625.288-.2 0-.4-.137-.2-.138-.275-.338L19.675 8.7h-3.7l-.625 1.825q-.05.2-.262.338-.213.137-.438.137Zm1.775-3.6h2.75L17.85 3.65h-.05Zm-9.5 14q-.2.35-.562.237Q6 21.525 6 21.15V14H4q-.425 0-.712-.288Q3 13.425 3 13V3q0-.425.288-.713Q3.575 2 4 2h7.45q.55 0 .85.45.3.45.075.95L9 11h2.25q.575 0 .875.5.3.5 0 1Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoFilled.displayName = 'AmauiIconMaterialFlashAutoFilled';

export default IconMaterialFlashAutoFilled;
