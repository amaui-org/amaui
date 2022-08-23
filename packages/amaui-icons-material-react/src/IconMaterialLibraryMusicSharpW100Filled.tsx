import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryMusicSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicSharpW100Filled'
      short_name='LibraryMusic'

      {...props}
    >
      <path d="M12.1 14.6Q12.875 14.6 13.413 14.062Q13.95 13.525 13.95 12.75V6.95H16.6V5.55H13.25V11.45Q13.025 11.175 12.738 11.037Q12.45 10.9 12.1 10.9Q11.325 10.9 10.788 11.438Q10.25 11.975 10.25 12.75Q10.25 13.525 10.788 14.062Q11.325 14.6 12.1 14.6ZM6.65 3.3H20.05V16.7H6.65ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicSharpW100Filled.displayName = 'AmauiIconMaterialLibraryMusicSharpW100Filled';

export default IconMaterialLibraryMusicSharpW100Filled;
