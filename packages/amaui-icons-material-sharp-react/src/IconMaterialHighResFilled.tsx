import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighResFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighResFilled'

      short_name='HighRes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-220h160v-60H460v-30h80v-60h-80v-30h100v-60H400v240Zm200 0h180v-140H660v-40h120v-60H600v140h120v40H600v60ZM300-500h60v-90h60v90h60v-240h-60v90h-60v-90h-60v240Zm280 0h60v-240h-60v240ZM40-120v-720h880v720H40Zm140-100h60v-80h24l36 80h60l-36-84q15-9 25.5-23.5T360-360v-40q0-25-17.5-42.5T300-460H180v240Zm60-140v-40h60v40h-60Z"/>
    </Icon>
  );
});

IconMaterialHighResFilled.displayName = 'AmauiIconMaterialHighResFilled';

export default IconMaterialHighResFilled;
