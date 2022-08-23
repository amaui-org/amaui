import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEuroSymbolSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolSharp'
      short_name='EuroSymbol'

      {...props}
    >
      <path d="M15 21Q12.05 21 9.75 19.325Q7.45 17.65 6.5 15H3V13H6.05Q6 12.725 6 12.5Q6 12.275 6 12Q6 11.725 6 11.5Q6 11.275 6.05 11H3V9H6.5Q7.45 6.35 9.75 4.675Q12.05 3 15 3Q16.725 3 18.263 3.6Q19.8 4.2 21 5.3L19.25 7.05Q18.375 6.325 17.288 5.912Q16.2 5.5 15 5.5Q13.125 5.5 11.588 6.463Q10.05 7.425 9.25 9H15V11H8.6Q8.55 11.275 8.525 11.5Q8.5 11.725 8.5 12Q8.5 12.275 8.525 12.5Q8.55 12.725 8.6 13H15V15H9.25Q10.05 16.575 11.588 17.538Q13.125 18.5 15 18.5Q16.2 18.5 17.312 18.087Q18.425 17.675 19.25 16.95L21 18.7Q19.8 19.8 18.263 20.4Q16.725 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolSharp.displayName = 'AmauiIconMaterialEuroSymbolSharp';

export default IconMaterialEuroSymbolSharp;
