import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSavedSearchSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavedSearchSharpW100'
      short_name='SavedSearch'

      {...props}
    >
      <path d="M19.45 19.9 13.2 13.65Q12.45 14.3 11.475 14.65Q10.5 15 9.55 15Q7.25 15 5.65 13.4Q4.05 11.8 4.05 9.5Q4.05 7.2 5.65 5.6Q7.25 4 9.55 4Q11.85 4 13.45 5.6Q15.05 7.2 15.05 9.5Q15.05 10.525 14.675 11.5Q14.3 12.475 13.7 13.15L19.95 19.4ZM9.55 14.3Q11.575 14.3 12.963 12.912Q14.35 11.525 14.35 9.5Q14.35 7.475 12.963 6.087Q11.575 4.7 9.55 4.7Q7.525 4.7 6.138 6.087Q4.75 7.475 4.75 9.5Q4.75 11.525 6.138 12.912Q7.525 14.3 9.55 14.3ZM8.3 11.4 8.75 9.9 7.45 8.85H9.05L9.55 7.3L10.05 8.85H11.65L10.35 9.9L10.8 11.4L9.55 10.45Z"/>
    </Icon>
  );
});

IconMaterialSavedSearchSharpW100.displayName = 'AmauiIconMaterialSavedSearchSharpW100';

export default IconMaterialSavedSearchSharpW100;
