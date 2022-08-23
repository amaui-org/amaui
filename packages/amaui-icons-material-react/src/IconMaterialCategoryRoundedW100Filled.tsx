import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCategoryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryRoundedW100Filled'
      short_name='Category'

      {...props}
    >
      <path d="M9.625 10Q9.2 10 8.988 9.613Q8.775 9.225 9 8.85L11.35 4.95Q11.575 4.6 12 4.6Q12.425 4.6 12.65 4.95L15 8.85Q15.225 9.225 15.013 9.613Q14.8 10 14.375 10ZM17.5 21Q16.025 21 15.013 19.988Q14 18.975 14 17.5Q14 16.025 15.013 15.012Q16.025 14 17.5 14Q18.975 14 19.988 15.012Q21 16.025 21 17.5Q21 18.975 19.988 19.988Q18.975 21 17.5 21ZM4.75 20.5Q4.425 20.5 4.213 20.288Q4 20.075 4 19.75V15.25Q4 14.925 4.213 14.712Q4.425 14.5 4.75 14.5H9.25Q9.575 14.5 9.788 14.712Q10 14.925 10 15.25V19.75Q10 20.075 9.788 20.288Q9.575 20.5 9.25 20.5Z"/>
    </Icon>
  );
});

IconMaterialCategoryRoundedW100Filled.displayName = 'AmauiIconMaterialCategoryRoundedW100Filled';

export default IconMaterialCategoryRoundedW100Filled;
