import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeakRemoveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemoveSharpFilled'
      short_name='LeakRemove'

      {...props}
    >
      <path d="M12.05 9.2 10.6 7.75Q11.275 6.725 11.637 5.525Q12 4.325 12 3H14Q14 4.725 13.5 6.3Q13 7.875 12.05 9.2ZM19.2 16.35 17.65 14.85Q18.4 14.425 19.25 14.212Q20.1 14 21 14V16Q20.5 16 20.062 16.075Q19.625 16.15 19.2 16.35ZM16.2 13.4 14.75 11.95Q16.1 11 17.688 10.5Q19.275 10 21 10V12Q19.675 12 18.462 12.363Q17.25 12.725 16.2 13.4ZM19.75 22.6 16.35 19.15Q16.2 19.6 16.1 20.05Q16 20.5 16 21H14Q14 20.1 14.213 19.25Q14.425 18.4 14.85 17.65L13.4 16.2Q12.725 17.25 12.363 18.462Q12 19.675 12 21H10Q10 19.275 10.5 17.688Q11 16.1 11.95 14.75L9.25 12.05Q7.9 12.95 6.312 13.475Q4.725 14 3 14V12Q4.325 12 5.537 11.637Q6.75 11.275 7.8 10.6L6.35 9.15Q5.6 9.575 4.75 9.787Q3.9 10 3 10V8Q3.5 8 3.938 7.9Q4.375 7.8 4.8 7.65L1.4 4.2L2.8 2.8L21.2 21.2ZM9.15 6.3 7.65 4.8Q7.8 4.375 7.9 3.938Q8 3.5 8 3H10Q10 3.9 9.788 4.737Q9.575 5.575 9.15 6.3Z"/>
    </Icon>
  );
});

IconMaterialLeakRemoveSharpFilled.displayName = 'AmauiIconMaterialLeakRemoveSharpFilled';

export default IconMaterialLeakRemoveSharpFilled;
