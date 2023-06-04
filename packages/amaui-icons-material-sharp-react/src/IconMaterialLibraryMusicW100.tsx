import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryMusicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicW100'

      short_name='LibraryMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.1 14.6q.775 0 1.313-.538.537-.537.537-1.312v-5.8h2.65v-1.4h-3.35v5.9q-.225-.275-.512-.413-.288-.137-.638-.137-.775 0-1.312.538-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538ZM6.65 3.3h13.4v13.4H6.65Zm.7 12.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7ZM7.35 4v12Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicW100.displayName = 'AmauiIconMaterialLibraryMusicW100';

export default IconMaterialLibraryMusicW100;
