import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioFileW100Filled'

      short_name='AudioFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.75 18.6q.775 0 1.312-.538.538-.537.538-1.312V12.7h1.95q.275 0 .488-.2.212-.2.212-.5 0-.275-.212-.488-.213-.212-.488-.212h-1.9q-.325 0-.537.212-.213.213-.213.538v3.4q-.225-.275-.512-.413-.288-.137-.638-.137-.775 0-1.312.538-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.55q.125 0 .263.05.137.05.237.15l3.65 3.65q.1.1.15.237.05.138.05.263V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm8.25-13H18L14.3 4v2.95q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAudioFileW100Filled.displayName = 'AmauiIconMaterialAudioFileW100Filled';

export default IconMaterialAudioFileW100Filled;
