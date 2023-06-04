import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightHighW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighW100'

      short_name='BacklightHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M72 670v-28h128v28H72Zm200-202-92-93 19-19 92 93-19 19Zm34 296v-68h348v68H306Zm160-388V208h28v168h-28Zm220 91-19-20 93-91 19 20-93 91Zm74 203v-28h128v28H760Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighW100.displayName = 'AmauiIconMaterialBacklightHighW100';

export default IconMaterialBacklightHighW100;
