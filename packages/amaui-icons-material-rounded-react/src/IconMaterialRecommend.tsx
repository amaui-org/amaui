import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecommend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Recommend'

      short_name='Recommend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18h5.5q.425 0 .788-.212.362-.213.512-.588l2.1-4.9q.05-.125.075-.25.025-.125.025-.25V11q0-.425-.288-.713Q17.425 10 17 10h-4.6l.6-3.4q.05-.25-.025-.475-.075-.225-.25-.4L12 5l-4.6 5q-.2.2-.3.45-.1.25-.1.55v5q0 .825.588 1.413Q8.175 18 9 18Zm3 4q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialRecommend.displayName = 'AmauiIconMaterialRecommend';

export default IconMaterialRecommend;
