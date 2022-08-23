import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpellcheckRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpellcheckRoundedW100'
      short_name='Spellcheck'

      {...props}
    >
      <path d="M14.1 20.85Q13.975 20.85 13.875 20.812Q13.775 20.775 13.7 20.7L11 18Q10.9 17.9 10.887 17.762Q10.875 17.625 11 17.5Q11.125 17.375 11.25 17.375Q11.375 17.375 11.5 17.5L14.1 20.1L19.55 14.65Q19.65 14.55 19.788 14.537Q19.925 14.525 20.05 14.65Q20.175 14.775 20.175 14.9Q20.175 15.025 20.05 15.15L14.5 20.7Q14.425 20.775 14.325 20.812Q14.225 20.85 14.1 20.85ZM4.475 16Q4.275 16 4.188 15.875Q4.1 15.75 4.175 15.55L8.575 3.35Q8.625 3.2 8.775 3.1Q8.925 3 9.075 3Q9.225 3 9.375 3.1Q9.525 3.2 9.575 3.35L13.925 15.525Q14 15.725 13.9 15.863Q13.8 16 13.575 16Q13.45 16 13.35 15.925Q13.25 15.85 13.2 15.725L11.95 12.05H6.15L4.825 15.75Q4.775 15.85 4.688 15.925Q4.6 16 4.475 16ZM6.4 11.45H11.75L9.05 4H9Z"/>
    </Icon>
  );
});

IconMaterialSpellcheckRoundedW100.displayName = 'AmauiIconMaterialSpellcheckRoundedW100';

export default IconMaterialSpellcheckRoundedW100;
