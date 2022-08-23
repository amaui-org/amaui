import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveRoundedW100Filled'
      short_name='Archive'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V8Q4.3 7.775 4.338 7.587Q4.375 7.4 4.5 7.25L5.7 5.85Q5.85 5.7 6.062 5.65Q6.275 5.6 6.5 5.6H17.5Q17.725 5.6 17.938 5.625Q18.15 5.65 18.3 5.85L19.45 7.25Q19.6 7.4 19.65 7.587Q19.7 7.775 19.7 8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.4 7.3H18.6L17.75 6.3H6.25ZM12 16.65Q12.15 16.65 12.275 16.6Q12.4 16.55 12.525 16.425L14.85 14.1Q14.95 14 14.963 13.863Q14.975 13.725 14.85 13.6Q14.725 13.475 14.6 13.475Q14.475 13.475 14.35 13.6L12.35 15.6V11.1Q12.35 10.95 12.25 10.85Q12.15 10.75 12 10.75Q11.85 10.75 11.75 10.85Q11.65 10.95 11.65 11.1V15.6L9.65 13.6Q9.55 13.5 9.413 13.488Q9.275 13.475 9.15 13.6Q9.025 13.725 9.025 13.85Q9.025 13.975 9.15 14.1L11.475 16.425Q11.6 16.55 11.725 16.6Q11.85 16.65 12 16.65Z"/>
    </Icon>
  );
});

IconMaterialArchiveRoundedW100Filled.displayName = 'AmauiIconMaterialArchiveRoundedW100Filled';

export default IconMaterialArchiveRoundedW100Filled;
