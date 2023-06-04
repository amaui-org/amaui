import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropRotateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateW100'

      short_name='CropRotate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 14.3V9H9.7v-.7h6v6Zm0 3.4v-2H8.3V9h-2v-.7h2v-2H9V15h10v.7h-3.3v2ZM10.35 1.4q.4-.075.8-.088.4-.012.8-.012 2.075 0 3.937.737 1.863.738 3.313 2.038 1.45 1.3 2.375 3.075Q22.5 8.925 22.7 11H22q-.2-1.925-1.062-3.575-.863-1.65-2.213-2.85-1.35-1.2-3.088-1.887Q13.9 2 11.95 2L14 4.05l-.5.5Zm3.3 21.2q-.4.075-.8.088-.4.012-.8.012-2.075 0-3.937-.738-1.863-.737-3.313-2.037-1.45-1.3-2.375-3.075Q1.5 15.075 1.3 13H2q.2 1.925 1.062 3.575.863 1.65 2.213 2.85 1.35 1.2 3.088 1.887Q10.1 22 12.05 22L10 19.95l.5-.5Z"/>
    </Icon>
  );
});

IconMaterialCropRotateW100.displayName = 'AmauiIconMaterialCropRotateW100';

export default IconMaterialCropRotateW100;
