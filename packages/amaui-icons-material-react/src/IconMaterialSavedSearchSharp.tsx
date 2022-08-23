import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSavedSearchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavedSearchSharp'
      short_name='SavedSearch'

      {...props}
    >
      <path d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14ZM7.5 12.5 8.25 10.05 6.25 8.45H8.7L9.5 6L10.3 8.45H12.75L10.75 10.05L11.5 12.5L9.5 10.95Z"/>
    </Icon>
  );
});

IconMaterialSavedSearchSharp.displayName = 'AmauiIconMaterialSavedSearchSharp';

export default IconMaterialSavedSearchSharp;
