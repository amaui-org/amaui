import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallW100Filled'

      short_name='PhotoSizeSelectSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.7q-.825 0-1.412-.588Q4.3 18.525 4.3 17.7V11h7.2q.625 0 1.062.438.438.437.438 1.062v7.2ZM4.3 9V7H5v2Zm0-4q0-.3.2-.5t.5-.2V5Zm1.775 12.7h5.15q.25 0 .337-.213.088-.212-.037-.412l-1.35-1.9q-.125-.175-.325-.163-.2.013-.325.163L8.25 16.85l-.875-1.125q-.125-.175-.325-.175t-.325.175l-.95 1.35q-.125.2-.037.412.087.213.337.213ZM7 5v-.7h2V5Zm4 0v-.7h2V5Zm4 14.7V19h2v.7ZM15 5v-.7h2V5Zm4 14.7V19h.7q0 .3-.2.5t-.5.2Zm0-2.7v-2h.7v2Zm0-4v-2h.7v2Zm0-4V7h.7v2Zm0-4v-.7q.3 0 .5.2t.2.5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmallW100Filled.displayName = 'AmauiIconMaterialPhotoSizeSelectSmallW100Filled';

export default IconMaterialPhotoSizeSelectSmallW100Filled;
