import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShareReviewsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareReviewsRoundedW100'
      short_name='ShareReviews'

      {...props}
    >
      <path d="M14.5 14.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963q-.388-.387-.963-.387-.3 0-.55.125-.25.125-.45.325l-3.675-1.85q.025-.05.025-.113V9.85q0-.075-.025-.125l3.65-1.825q.2.2.463.325.262.125.562.125.575 0 .963-.388.387-.387.387-.962t-.387-.963q-.388-.387-.963-.387t-.962.387q-.388.388-.388.963v.137q0 .063.025.138L9.525 9.1q-.2-.2-.463-.325Q8.8 8.65 8.5 8.65q-.575 0-.962.387-.388.388-.388.963t.388.962q.387.388.962.388.3 0 .562-.138.263-.137.463-.337l3.65 1.85q-.025.075-.025.137V13q0 .575.388.962.387.388.962.388ZM3.3 19.5V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Zm.7-1.7L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/>
    </Icon>
  );
});

IconMaterialShareReviewsRoundedW100.displayName = 'AmauiIconMaterialShareReviewsRoundedW100';

export default IconMaterialShareReviewsRoundedW100;
