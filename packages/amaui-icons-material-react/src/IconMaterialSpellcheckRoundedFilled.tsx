import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpellcheckRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckRoundedFilled'
      short_name='Spellcheck'

      {...props}
    >
      <path d="M14.1 21.7Q13.95 21.7 13.825 21.65Q13.7 21.6 13.575 21.475L10.55 18.45Q10.275 18.175 10.275 17.75Q10.275 17.325 10.55 17.05Q10.825 16.775 11.25 16.775Q11.675 16.775 11.95 17.05L14.1 19.2L19.05 14.25Q19.325 13.975 19.75 13.975Q20.175 13.975 20.45 14.25Q20.725 14.525 20.725 14.95Q20.725 15.375 20.45 15.65L14.625 21.475Q14.5 21.6 14.375 21.65Q14.25 21.7 14.1 21.7ZM4.4 16Q3.825 16 3.562 15.625Q3.3 15.25 3.5 14.7L7.45 4.1Q7.625 3.65 8.075 3.325Q8.525 3 9.025 3Q9.525 3 9.975 3.325Q10.425 3.65 10.6 4.1L14.55 14.625Q14.75 15.2 14.475 15.6Q14.2 16 13.575 16Q13.225 16 12.913 15.775Q12.6 15.55 12.475 15.225L11.6 12.7H6.35L5.45 15.275Q5.325 15.575 5.037 15.787Q4.75 16 4.4 16ZM7.05 10.8H10.95L9.05 5.4H8.95Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckRoundedFilled.displayName = 'AmauiIconMaterialSpellcheckRoundedFilled';

export default IconMaterialSpellcheckRoundedFilled;
