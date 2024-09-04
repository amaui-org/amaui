import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHearingAidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingAidW100Filled'

      short_name='HearingAid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M685-106q-50 0-88.5-33T541-220q-13-35-39-68t-71-68q-60-48-92-111.5T307-600q0-106 74-180t180-74q100 0 172 65.5T813-626h-28q-8-85-72-142.5T561-826q-94 0-160 66t-66 160q0 65 30.5 124T453-374q40 30 68.5 66.5T567-230q16 38 46.5 67t71.5 29q45 0 78-31.5t33-76.5q0-45-17.5-73T737-369l-58 46-93-166q-54 12-97-21.5T446-600q0-48 33-81t81-33q57 0 91 45.5t19 99.5l152 132-62 49q26 31 45 64t19 82q0 57-41 96.5T685-106ZM251-328q-51-57-77.5-127T147-600q0-75 27-146t77-128l20 18q-48 55-72 120t-24 136q0 69 24.5 134T271-346l-20 18Z"/>
    </Icon>
  );
});

IconMaterialHearingAidW100Filled.displayName = 'AmauiIconMaterialHearingAidW100Filled';

export default IconMaterialHearingAidW100Filled;
