import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterRoundedW100'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <path d="M8.65 19.7Q8.3 19.7 8.038 19.438Q7.775 19.175 7.775 18.825V12.35H3.65Q3.5 12.35 3.4 12.25Q3.3 12.15 3.3 12Q3.3 11.85 3.4 11.75Q3.5 11.65 3.65 11.65H7.775V5.175Q7.775 4.825 8.038 4.562Q8.3 4.3 8.65 4.3Q9 4.3 9.262 4.562Q9.525 4.825 9.525 5.175V11.65H14.475V8.175Q14.475 7.825 14.738 7.562Q15 7.3 15.35 7.3Q15.7 7.3 15.963 7.562Q16.225 7.825 16.225 8.175V11.65H20.35Q20.5 11.65 20.6 11.75Q20.7 11.85 20.7 12Q20.7 12.15 20.6 12.25Q20.5 12.35 20.35 12.35H16.225V15.825Q16.225 16.175 15.963 16.438Q15.7 16.7 15.35 16.7Q15 16.7 14.738 16.438Q14.475 16.175 14.475 15.825V12.35H9.525V18.825Q9.525 19.175 9.262 19.438Q9 19.7 8.65 19.7Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterRoundedW100.displayName = 'AmauiIconMaterialAlignVerticalCenterRoundedW100';

export default IconMaterialAlignVerticalCenterRoundedW100;
