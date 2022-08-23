import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayPrimaryPortraitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryPortraitRoundedW100Filled'
      short_name='StayPrimaryPortrait'

      {...props}
    >
      <path d="M12 13.65Q11.85 13.65 11.75 13.55Q11.65 13.45 11.65 13.3V7.9Q11.65 7.75 11.75 7.65Q11.85 7.55 12 7.55Q12.15 7.55 12.25 7.65Q12.35 7.75 12.35 7.9V13.3Q12.35 13.45 12.25 13.55Q12.15 13.65 12 13.65ZM12 16.3Q11.8 16.3 11.65 16.15Q11.5 16 11.5 15.8Q11.5 15.575 11.65 15.438Q11.8 15.3 12 15.3Q12.225 15.3 12.363 15.438Q12.5 15.575 12.5 15.8Q12.5 16 12.363 16.15Q12.225 16.3 12 16.3ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryPortraitRoundedW100Filled.displayName = 'AmauiIconMaterialStayPrimaryPortraitRoundedW100Filled';

export default IconMaterialStayPrimaryPortraitRoundedW100Filled;
