import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAwardStar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStar'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-452Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100ZM363-310l117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z"/>
    </Icon>
  );
});

IconMaterialAwardStar.displayName = 'AmauiIconMaterialAwardStar';

export default IconMaterialAwardStar;
