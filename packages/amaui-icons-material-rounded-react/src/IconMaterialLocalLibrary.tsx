import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibrary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibrary'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 21.525Q9.5 20.55 7.963 19.95q-1.538-.6-3.213-.825-.75-.1-1.25-.638Q3 17.95 3 17.25V10.2q0-.95.65-1.563.65-.612 1.525-.462Q7.1 8.5 8.838 9.35q1.737.85 3.162 2.2 1.425-1.35 3.163-2.2 1.737-.85 3.662-1.175.875-.15 1.525.462.65.613.65 1.563v7.05q0 .7-.5 1.237-.5.538-1.25.638-1.675.225-3.212.825-1.538.6-2.888 1.575-.5.375-1.15.375-.65 0-1.15-.375ZM12 19.9q1.575-1.175 3.35-1.875 1.775-.7 3.65-.925v-6.9q-1.825.325-3.587 1.312Q13.65 12.5 12 14.15q-1.65-1.65-3.412-2.638Q6.825 10.525 5 10.2v6.9q1.875.225 3.65.925 1.775.7 3.35 1.875ZM12 9q-1.65 0-2.825-1.175Q8 6.65 8 5q0-1.65 1.175-2.825Q10.35 1 12 1q1.65 0 2.825 1.175Q16 3.35 16 5q0 1.65-1.175 2.825Q13.65 9 12 9Zm0-2q.825 0 1.413-.588Q14 5.825 14 5t-.587-1.413Q12.825 3 12 3q-.825 0-1.412.587Q10 4.175 10 5q0 .825.588 1.412Q11.175 7 12 7Zm0-2Zm0 10.05Z"/>
    </Icon>
  );
});

IconMaterialLocalLibrary.displayName = 'AmauiIconMaterialLocalLibrary';

export default IconMaterialLocalLibrary;
