import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2SharpFilled'
      short_name='ExposurePlus2'

      {...props}
    >
      <path d="M6 17V14H3V12H6V9H8V12H11V14H8V17ZM12.1 19V16.9L17.1 11.8Q17.925 10.925 18.263 10.337Q18.6 9.75 18.6 9Q18.6 8.275 18.038 7.687Q17.475 7.1 16.35 7.1Q15.45 7.1 14.863 7.6Q14.275 8.1 14.05 8.9L12.05 8.1Q12.4 6.975 13.5 5.987Q14.6 5 16.4 5Q18.475 5 19.638 6.188Q20.8 7.375 20.8 9Q20.8 10.125 20.275 11.05Q19.75 11.975 18.65 13.1L15 16.9L15.05 17H21V19Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2SharpFilled.displayName = 'AmauiIconMaterialExposurePlus2SharpFilled';

export default IconMaterialExposurePlus2SharpFilled;
