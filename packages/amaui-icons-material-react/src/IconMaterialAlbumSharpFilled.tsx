import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlbumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlbumSharpFilled'
      short_name='Album'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 16.5Q13.875 16.5 15.188 15.188Q16.5 13.875 16.5 12Q16.5 10.125 15.188 8.812Q13.875 7.5 12 7.5Q10.125 7.5 8.812 8.812Q7.5 10.125 7.5 12Q7.5 13.875 8.812 15.188Q10.125 16.5 12 16.5ZM12 13Q11.575 13 11.288 12.712Q11 12.425 11 12Q11 11.575 11.288 11.287Q11.575 11 12 11Q12.425 11 12.713 11.287Q13 11.575 13 12Q13 12.425 12.713 12.712Q12.425 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialAlbumSharpFilled.displayName = 'AmauiIconMaterialAlbumSharpFilled';

export default IconMaterialAlbumSharpFilled;
