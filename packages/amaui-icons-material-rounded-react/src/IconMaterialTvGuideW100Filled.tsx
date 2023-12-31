import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvGuideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGuideW100Filled'

      short_name='TvGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm138-390v178q0 6 4 10t10 4q6 0 10-4t4-10v-178h92l66 182q2 5 5.5 7.5t8.5 2.5h12q5 0 8.5-2.5t5.5-7.5l71-191q2-7-1.5-13t-11.5-6q-5 0-8 2t-5 7l-65 174-59-163q-3-9-10.5-14.5T489-590H288q-6 0-10 4t-4 10q0 6 4 10t10 4h82Z"/>
    </Icon>
  );
});

IconMaterialTvGuideW100Filled.displayName = 'AmauiIconMaterialTvGuideW100Filled';

export default IconMaterialTvGuideW100Filled;
