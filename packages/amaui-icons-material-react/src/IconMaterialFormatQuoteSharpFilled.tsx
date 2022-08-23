import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatQuoteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteSharpFilled'
      short_name='FormatQuote'

      {...props}
    >
      <path d="M5.7 18 8 14Q8 14 8 14Q8 14 8 14Q6.35 14 5.175 12.825Q4 11.65 4 10Q4 8.35 5.175 7.175Q6.35 6 8 6Q9.65 6 10.825 7.175Q12 8.35 12 10Q12 10.575 11.863 11.062Q11.725 11.55 11.45 12L8 18ZM14.7 18 17 14Q17 14 17 14Q17 14 17 14Q15.35 14 14.175 12.825Q13 11.65 13 10Q13 8.35 14.175 7.175Q15.35 6 17 6Q18.65 6 19.825 7.175Q21 8.35 21 10Q21 10.575 20.863 11.062Q20.725 11.55 20.45 12L17 18ZM8 11.5Q8.625 11.5 9.062 11.062Q9.5 10.625 9.5 10Q9.5 9.375 9.062 8.938Q8.625 8.5 8 8.5Q7.375 8.5 6.938 8.938Q6.5 9.375 6.5 10Q6.5 10.625 6.938 11.062Q7.375 11.5 8 11.5ZM17 11.5Q17.625 11.5 18.062 11.062Q18.5 10.625 18.5 10Q18.5 9.375 18.062 8.938Q17.625 8.5 17 8.5Q16.375 8.5 15.938 8.938Q15.5 9.375 15.5 10Q15.5 10.625 15.938 11.062Q16.375 11.5 17 11.5Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteSharpFilled.displayName = 'AmauiIconMaterialFormatQuoteSharpFilled';

export default IconMaterialFormatQuoteSharpFilled;
