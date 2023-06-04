import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResumeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeW100Filled'

      short_name='Resume'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M304 730V422q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v308q0 5.95-4.035 9.975-4.035 4.025-10 4.025T308 739.975q-4-4.025-4-9.975Zm173-13q-15 9-30 .064T432 691V461q0-17.128 15-26.064t30 .064l193 115q14 9.214 14 26.107T670 602L477 717Z"/>
    </Icon>
  );
});

IconMaterialResumeW100Filled.displayName = 'AmauiIconMaterialResumeW100Filled';

export default IconMaterialResumeW100Filled;
