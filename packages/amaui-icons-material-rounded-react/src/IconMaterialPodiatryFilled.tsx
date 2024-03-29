import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiatryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiatryFilled'

      short_name='Podiatry'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m684 667 179-179 29 29q12 12 12 28t-12 28L769 696q-12 12-28.5 11.5T712 695l-28-28ZM40 790q0-24 13.5-44T90 717q21-8 40-19t38-25l58 58q5 7 13.5 6.5T254 731q5-5 5-13.5t-5-15.5l-55-55 15.5-15.5Q222 624 230 615l54 55q5 7 13.5 7t15.5-7q5-5 5-13.5t-5-15.5l-55-54q5-10 10.5-20.5T278 544l65 65q5 7 13.5 7t15.5-7q5-5 5-13t-5-15l-77-77 35-97q3-8 8-16t11-14l146-145q23-23 56.5-22.5T608 233l226 226-390 412q-11 12-26 18.5t-32 6.5H120q-33 0-56.5-23.5T40 816v-26Z"/>
    </Icon>
  );
});

IconMaterialPodiatryFilled.displayName = 'AmauiIconMaterialPodiatryFilled';

export default IconMaterialPodiatryFilled;
