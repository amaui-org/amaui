import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectRoundedW100Filled'
      short_name='Subject'

      {...props}
    >
      <path d="M5 18.35Q4.85 18.35 4.75 18.25Q4.65 18.15 4.65 18Q4.65 17.85 4.75 17.75Q4.85 17.65 5 17.65H13Q13.15 17.65 13.25 17.75Q13.35 17.85 13.35 18Q13.35 18.15 13.25 18.25Q13.15 18.35 13 18.35ZM5 10.35Q4.85 10.35 4.75 10.25Q4.65 10.15 4.65 10Q4.65 9.85 4.75 9.75Q4.85 9.65 5 9.65H19Q19.15 9.65 19.25 9.75Q19.35 9.85 19.35 10Q19.35 10.15 19.25 10.25Q19.15 10.35 19 10.35ZM5 14.35Q4.85 14.35 4.75 14.25Q4.65 14.15 4.65 14Q4.65 13.85 4.75 13.75Q4.85 13.65 5 13.65H19Q19.15 13.65 19.25 13.75Q19.35 13.85 19.35 14Q19.35 14.15 19.25 14.25Q19.15 14.35 19 14.35ZM5 6.35Q4.85 6.35 4.75 6.25Q4.65 6.15 4.65 6Q4.65 5.85 4.75 5.75Q4.85 5.65 5 5.65H19Q19.15 5.65 19.25 5.75Q19.35 5.85 19.35 6Q19.35 6.15 19.25 6.25Q19.15 6.35 19 6.35Z"/>
    </Icon>
  );
});

IconMaterialSubjectRoundedW100Filled.displayName = 'AmauiIconMaterialSubjectRoundedW100Filled';

export default IconMaterialSubjectRoundedW100Filled;
