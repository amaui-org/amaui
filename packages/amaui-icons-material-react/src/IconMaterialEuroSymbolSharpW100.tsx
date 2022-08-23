import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEuroSymbolSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolSharpW100'
      short_name='EuroSymbol'

      {...props}
    >
      <path d="M15.35 20.1Q12.85 20.1 10.7 18.663Q8.55 17.225 7.6 14.35H4V13.65H7.4Q7.325 13.35 7.287 12.85Q7.25 12.35 7.25 12Q7.25 11.65 7.287 11.188Q7.325 10.725 7.4 10.35H4V9.65H7.6Q8.425 7.05 10.55 5.475Q12.675 3.9 15.35 3.9Q16.675 3.9 17.75 4.25Q18.825 4.6 20 5.35L19.5 5.85Q18.475 5.2 17.425 4.9Q16.375 4.6 15.35 4.6Q12.75 4.6 10.887 6.087Q9.025 7.575 8.35 9.65H14.7V10.35H8.15Q8.025 10.725 7.988 11.188Q7.95 11.65 7.95 12Q7.95 12.35 8.013 12.863Q8.075 13.375 8.15 13.65H14.7V14.35H8.325Q9.2 16.925 11.175 18.163Q13.15 19.4 15.35 19.4Q16.375 19.4 17.488 19.087Q18.6 18.775 19.5 18.125L20 18.65Q18.8 19.45 17.712 19.775Q16.625 20.1 15.35 20.1Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolSharpW100.displayName = 'AmauiIconMaterialEuroSymbolSharpW100';

export default IconMaterialEuroSymbolSharpW100;
