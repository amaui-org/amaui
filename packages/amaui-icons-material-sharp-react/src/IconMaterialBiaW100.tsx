import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBiaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiaW100'

      short_name='Bia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 816h106v-94h28v94h132v-94h28v94h132v-94h28v94h186V481q-28 26-74.728 37.5Q678.543 530 629 530q-32 0-64-4.5T506 510H160v306Zm120-334h179q-14-13-21.5-29t-7.5-37q0-11 2.25-21t6.75-19H280v106Zm349.009 20Q691 502 745.5 485.5T800 416q0-53-54.509-69.5t-116.5-16.5Q567 330 512.5 346.5T458 416q0 53 54.509 69.5t116.5 16.5ZM132 844V482h120V348h209q29-25 74.626-35.5Q581.252 302 629 302q73 0 136 25.5t63 88.5v428H132Zm28-28h640-640Z"/>
    </Icon>
  );
});

IconMaterialBiaW100.displayName = 'AmauiIconMaterialBiaW100';

export default IconMaterialBiaW100;
