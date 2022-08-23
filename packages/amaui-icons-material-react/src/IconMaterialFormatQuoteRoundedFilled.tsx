import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatQuoteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteRoundedFilled'
      short_name='FormatQuote'

      {...props}
    >
      <path d="M15 11H18V8H15ZM6 11H9V8H6ZM17.175 17Q16.425 17 16.025 16.363Q15.625 15.725 15.975 15.05L17 13H15Q14.175 13 13.588 12.412Q13 11.825 13 11V8Q13 7.175 13.588 6.588Q14.175 6 15 6H18Q18.825 6 19.413 6.588Q20 7.175 20 8V12.525Q20 12.75 19.962 12.988Q19.925 13.225 19.8 13.425L18.375 16.25Q18.2 16.6 17.875 16.8Q17.55 17 17.175 17ZM8.175 17Q7.425 17 7.025 16.363Q6.625 15.725 6.975 15.05L8 13H6Q5.175 13 4.588 12.412Q4 11.825 4 11V8Q4 7.175 4.588 6.588Q5.175 6 6 6H9Q9.825 6 10.413 6.588Q11 7.175 11 8V12.525Q11 12.75 10.963 12.988Q10.925 13.225 10.8 13.425L9.375 16.25Q9.2 16.6 8.875 16.8Q8.55 17 8.175 17ZM6 11V8H9V11ZM15 11V8H18V11Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteRoundedFilled.displayName = 'AmauiIconMaterialFormatQuoteRoundedFilled';

export default IconMaterialFormatQuoteRoundedFilled;
