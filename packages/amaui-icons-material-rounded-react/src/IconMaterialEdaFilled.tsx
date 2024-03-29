import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaFilled'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 1016q-66 0-113-47t-47-113V736h218l136 181 247-247 49-30q20-13 44-11t44 16l63 47-289 289q-17 17-39 26t-46 9H280ZM120 656V296q0-17 11.5-28.5T160 256q17 0 28.5 11.5T200 296v280h80V216q0-17 11.5-28.5T320 176q17 0 28.5 11.5T360 216v360h80V176q0-17 11.5-28.5T480 136q17 0 28.5 11.5T520 176v400h80V256q0-17 11.5-28.5T640 216q17 0 28.5 11.5T680 256v343L482 795 378 656H120Z"/>
    </Icon>
  );
});

IconMaterialEdaFilled.displayName = 'AmauiIconMaterialEdaFilled';

export default IconMaterialEdaFilled;
