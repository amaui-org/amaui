import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextToSpeechSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextToSpeechSharp'
      short_name='TextToSpeech'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H13L11 4H4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20H15Q15 20 15 20Q15 20 15 20V17H17V20Q17 20.825 16.413 21.413Q15.825 22 15 22ZM6 18V16H13V18ZM6 15V13H11V15ZM15 15 11 11H8V6H11L15 2ZM17 11.95V5.05Q17.9 5.575 18.45 6.475Q19 7.375 19 8.5Q19 9.625 18.45 10.525Q17.9 11.425 17 11.95ZM17 16.25V14.15Q18.75 13.525 19.875 11.987Q21 10.45 21 8.5Q21 6.55 19.875 5.012Q18.75 3.475 17 2.85V0.75Q19.6 1.425 21.3 3.562Q23 5.7 23 8.5Q23 11.3 21.3 13.438Q19.6 15.575 17 16.25Z"/>
    </Icon>
  );
});

IconMaterialTextToSpeechSharp.displayName = 'AmauiIconMaterialTextToSpeechSharp';

export default IconMaterialTextToSpeechSharp;
