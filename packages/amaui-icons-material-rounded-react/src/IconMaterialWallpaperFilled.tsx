import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallpaperFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperFilled'

      short_name='Wallpaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 10q-.65 0-1.075-.425Q14 9.15 14 8.5q0-.65.425-1.075Q14.85 7 15.5 7q.65 0 1.075.425Q17 7.85 17 8.5q0 .65-.425 1.075Q16.15 10 15.5 10ZM4 11q-.425 0-.712-.288Q3 10.425 3 10V5q0-.825.587-1.413Q4.175 3 5 3h5q.425 0 .713.287Q11 3.575 11 4t-.287.712Q10.425 5 10 5H5v5q0 .425-.287.712Q4.425 11 4 11Zm1 10q-.825 0-1.413-.587Q3 19.825 3 19v-5q0-.425.288-.713Q3.575 13 4 13t.713.287Q5 13.575 5 14v5h5q.425 0 .713.288.287.287.287.712t-.287.712Q10.425 21 10 21Zm15-10q-.425 0-.712-.288Q19 10.425 19 10V5h-5q-.425 0-.712-.288Q13 4.425 13 4t.288-.713Q13.575 3 14 3h5q.825 0 1.413.587Q21 4.175 21 5v5q0 .425-.288.712Q20.425 11 20 11Zm-6 10q-.425 0-.712-.288Q13 20.425 13 20t.288-.712Q13.575 19 14 19h5v-5q0-.425.288-.713Q19.575 13 20 13t.712.287Q21 13.575 21 14v5q0 .825-.587 1.413Q19.825 21 19 21Zm-7-4q-.3 0-.45-.275-.15-.275.05-.525l2-2.675q.15-.2.4-.2t.4.2L11.25 16l2.6-3.475q.15-.2.4-.2t.4.2L17.4 16.2q.2.25.05.525Q17.3 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialWallpaperFilled.displayName = 'AmauiIconMaterialWallpaperFilled';

export default IconMaterialWallpaperFilled;
