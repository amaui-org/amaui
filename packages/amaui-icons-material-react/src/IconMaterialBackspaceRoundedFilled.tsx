import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceRoundedFilled'
      short_name='Backspace'

      {...props}
    >
      <path d="M9.025 19Q8.525 19 8.088 18.775Q7.65 18.55 7.375 18.15L3.85 13.15Q3.475 12.625 3.475 12Q3.475 11.375 3.85 10.85L7.375 5.85Q7.65 5.45 8.088 5.225Q8.525 5 9.025 5H19.025Q19.85 5 20.438 5.588Q21.025 6.175 21.025 7V17Q21.025 17.825 20.438 18.413Q19.85 19 19.025 19ZM10.7 15.3Q10.975 15.575 11.4 15.575Q11.825 15.575 12.1 15.3L14 13.4L15.9 15.3Q16.175 15.575 16.6 15.575Q17.025 15.575 17.3 15.3Q17.575 15.025 17.575 14.6Q17.575 14.175 17.3 13.9L15.4 12L17.3 10.1Q17.575 9.825 17.575 9.4Q17.575 8.975 17.3 8.7Q17.025 8.425 16.6 8.425Q16.175 8.425 15.9 8.7L14 10.6L12.1 8.7Q11.825 8.425 11.4 8.425Q10.975 8.425 10.7 8.7Q10.425 8.975 10.425 9.4Q10.425 9.825 10.7 10.1L12.6 12L10.7 13.9Q10.425 14.175 10.425 14.6Q10.425 15.025 10.7 15.3Z"/>
    </Icon>
  );
});

IconMaterialBackspaceRoundedFilled.displayName = 'AmauiIconMaterialBackspaceRoundedFilled';

export default IconMaterialBackspaceRoundedFilled;
