import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlbum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Album'

      short_name='Album'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.875 0 3.188-1.312Q16.5 13.875 16.5 12q0-1.875-1.312-3.188Q13.875 7.5 12 7.5q-1.875 0-3.188 1.312Q7.5 10.125 7.5 12q0 1.875 1.312 3.188Q10.125 16.5 12 16.5Zm0-3.5q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialAlbum.displayName = 'AmauiIconMaterialAlbum';

export default IconMaterialAlbum;
