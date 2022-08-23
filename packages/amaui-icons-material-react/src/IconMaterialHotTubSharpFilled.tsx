import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotTubSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotTubSharpFilled'
      short_name='HotTub'

      {...props}
    >
      <path d="M7 8Q6.175 8 5.588 7.412Q5 6.825 5 6Q5 5.175 5.588 4.588Q6.175 4 7 4Q7.825 4 8.412 4.588Q9 5.175 9 6Q9 6.825 8.412 7.412Q7.825 8 7 8ZM2 22V12H5V11.25Q5 10.3 5.65 9.65Q6.3 9 7.25 9Q7.75 9 8.188 9.2Q8.625 9.4 8.95 9.75L10.35 11.3Q10.525 11.5 10.725 11.675Q10.925 11.85 11.15 12H22V22ZM18 10 18.1 9.4Q18.225 8.8 18.038 8.225Q17.85 7.65 17.35 7.15Q16.55 6.35 16.238 5.412Q15.925 4.475 16.05 3.45L16.1 3H18L17.9 3.6Q17.8 4.2 17.95 4.75Q18.1 5.3 18.6 5.8Q19.4 6.6 19.738 7.562Q20.075 8.525 19.95 9.55L19.9 10ZM14 10 14.1 9.4Q14.225 8.8 14.038 8.225Q13.85 7.65 13.35 7.15Q12.55 6.35 12.238 5.412Q11.925 4.475 12.05 3.45L12.1 3H14L13.9 3.6Q13.775 4.2 13.938 4.75Q14.1 5.3 14.6 5.8Q15.4 6.6 15.738 7.562Q16.075 8.525 15.95 9.55L15.9 10ZM17 20H19V14H17ZM13 20H15V14H13ZM9 20H11V14H9ZM5 20H7V14H5Z"/>
    </Icon>
  );
});

IconMaterialHotTubSharpFilled.displayName = 'AmauiIconMaterialHotTubSharpFilled';

export default IconMaterialHotTubSharpFilled;
