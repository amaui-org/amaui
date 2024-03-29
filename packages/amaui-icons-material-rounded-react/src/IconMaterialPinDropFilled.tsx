import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinDropFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropFilled'

      short_name='PinDrop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.65q-.225 0-.425-.063-.2-.062-.375-.187-3.125-2.425-4.662-4.725Q5 11.375 5 9.15q0-1.775.638-3.113Q6.275 4.7 7.275 3.8q1-.9 2.25-1.35Q10.775 2 12 2t2.475.45q1.25.45 2.25 1.35 1 .9 1.638 2.237Q19 7.375 19 9.15q0 2.225-1.538 4.525-1.537 2.3-4.662 4.725-.15.125-.362.187-.213.063-.438.063ZM12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11ZM6 22q-.425 0-.713-.288Q5 21.425 5 21t.287-.712Q5.575 20 6 20h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialPinDropFilled.displayName = 'AmauiIconMaterialPinDropFilled';

export default IconMaterialPinDropFilled;
