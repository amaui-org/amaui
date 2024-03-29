import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.675 19.1q2-1.05 3.163-2.963Q17 14.225 17 12q0-2.225-1.162-4.138Q14.675 5.95 12.675 4.9 13.8 6.45 14.4 8.262 15 10.075 15 12t-.6 3.738q-.6 1.812-1.725 3.362ZM19 12q0 2.025-.737 3.8-.738 1.775-2.038 3.125-1.3 1.35-3.062 2.162Q11.4 21.9 9.35 22q-.425.025-.713-.288-.287-.312-.287-.737 0-.25.1-.462.1-.213.3-.338 2.05-1.45 3.15-3.575T13 12q0-2.475-1.1-4.6-1.1-2.125-3.15-3.575-.2-.125-.3-.338-.1-.212-.1-.462 0-.425.287-.738.288-.312.713-.287 2.05.1 3.813.912 1.762.813 3.062 2.163 1.3 1.35 2.038 3.125Q19 9.975 19 12Zm-4 0Z"/>
    </Icon>
  );
});

IconMaterialBrightness3.displayName = 'AmauiIconMaterialBrightness3';

export default IconMaterialBrightness3;
