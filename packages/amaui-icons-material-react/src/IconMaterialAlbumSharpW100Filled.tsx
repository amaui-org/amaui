import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlbumSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlbumSharpW100Filled'
      short_name='Album'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 15.2Q13.35 15.2 14.275 14.275Q15.2 13.35 15.2 12Q15.2 10.65 14.275 9.725Q13.35 8.8 12 8.8Q10.65 8.8 9.725 9.725Q8.8 10.65 8.8 12Q8.8 13.35 9.725 14.275Q10.65 15.2 12 15.2ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialAlbumSharpW100Filled.displayName = 'AmauiIconMaterialAlbumSharpW100Filled';

export default IconMaterialAlbumSharpW100Filled;
