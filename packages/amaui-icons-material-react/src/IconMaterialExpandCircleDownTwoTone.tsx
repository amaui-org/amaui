import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandCircleDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDownTwoTone'
      short_name='ExpandCircleDown'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M12,4c-4.42,0-8,3.58-8,8s3.58,8,8,8s8-3.58,8-8S16.42,4,12,4z M12,15.5L7.5,11l1.42-1.41L12,12.67l3.08-3.08 L16.5,11L12,15.5z" opacity=".3"/><path d="M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDownTwoTone.displayName = 'AmauiIconMaterialExpandCircleDownTwoTone';

export default IconMaterialExpandCircleDownTwoTone;
