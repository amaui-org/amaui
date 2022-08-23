import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecordVoiceOverSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOverSharpFilled'
      short_name='RecordVoiceOver'

      {...props}
    >
      <path d="M19.95 15.95 18.4 14.4Q19.5 13.375 20.125 11.975Q20.75 10.575 20.75 9Q20.75 7.425 20.125 6.05Q19.5 4.675 18.4 3.65L19.95 2.05Q21.35 3.375 22.175 5.175Q23 6.975 23 9Q23 11.025 22.175 12.825Q21.35 14.625 19.95 15.95ZM16.75 12.75 15.15 11.15Q15.6 10.725 15.875 10.188Q16.15 9.65 16.15 9Q16.15 8.35 15.875 7.812Q15.6 7.275 15.15 6.85L16.75 5.25Q17.55 5.975 18 6.937Q18.45 7.9 18.45 9Q18.45 10.1 18 11.062Q17.55 12.025 16.75 12.75ZM9 13Q7.35 13 6.175 11.825Q5 10.65 5 9Q5 7.35 6.175 6.175Q7.35 5 9 5Q10.65 5 11.825 6.175Q13 7.35 13 9Q13 10.65 11.825 11.825Q10.65 13 9 13ZM1 21V18.2Q1 17.375 1.425 16.65Q1.85 15.925 2.6 15.55Q3.875 14.9 5.475 14.45Q7.075 14 9 14Q10.925 14 12.525 14.45Q14.125 14.9 15.4 15.55Q16.15 15.925 16.575 16.65Q17 17.375 17 18.2V21Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOverSharpFilled.displayName = 'AmauiIconMaterialRecordVoiceOverSharpFilled';

export default IconMaterialRecordVoiceOverSharpFilled;
