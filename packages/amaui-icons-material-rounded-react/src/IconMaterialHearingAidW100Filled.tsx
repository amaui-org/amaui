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
      <path d="M685-106q-50 0-88.5-33T541-220q-13-35-39-68t-71-68q-60-48-92-111.5T307-600q0-106 74-180t180-74q96 0 165.5 60T810-643q1 6-2.5 10.5T798-627q-6 1-10-2.5t-5-9.5q-12-81-74.5-134T561-826q-94 0-160 66t-66 160q0 65 30.5 124T453-374q40 30 68.5 66.5T567-230q16 38 46.5 67t71.5 29q45 0 78-31.5t33-76.5q0-45-17.5-73T737-369l-31 24q-11 8-24.5 5.5T661-354l-75-135q-54 12-97-21.5T446-600q0-48 33-81t81-33q57 0 91 45.5t19 99.5l125 108q11 9 10.5 23.5T794-414l-34 26q26 31 45 64t19 82q0 57-41 96.5T685-106ZM175-600q0 66 22 127.5T262-357q4 5 4 10.5t-5 9.5q-5 4-10 3.5t-9-5.5q-46-56-70.5-122.5T147-600q0-72 24.5-140T242-863q4-5 9-5.5t10 3.5q5 4 5 9.5t-4 10.5q-43 54-65 116t-22 129Z"/>
    </Icon>
  );
});

IconMaterialHearingAidW100Filled.displayName = 'AmauiIconMaterialHearingAidW100Filled';

export default IconMaterialHearingAidW100Filled;
