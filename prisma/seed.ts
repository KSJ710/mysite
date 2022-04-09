import { PrismaClient } from '@prisma/client';
import colors from './seed_data/colors';
import fontFamilies from './seed_data/font_families';
import headParts from './seed_data/head_parts';
import footParts from './seed_data/foot_parts';
import sampleList from './seed_data/sample_list';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  await prisma.color.createMany({ data: colors });
  await prisma.fontFamily.createMany({ data: fontFamilies });
  await prisma.headPart.createMany({ data: headParts });
  await prisma.footPart.createMany({ data: footParts });
  await prisma.footPart.createMany({ data: footParts });
  await prisma.sampleList.createMany({ data: sampleList });

  const [prefectures, cities] = await axios
    .get('https://geolonia.github.io/japanese-addresses/api/ja.json')
    .then((res) => {
      const addresses = JSON.parse(JSON.stringify(res.data));
      let prefectures = [];
      let cities = [];

      let num = 1;
      // 県を配列に入れる
      for (const ken in addresses) {
        prefectures.push({ name: ken });
        // 市町村を配列に入れる
        for (const city of addresses[ken]) {
          cities.push({ prefectureId: num, name: city });
        }
        // 次の県へ
        num++;
      }
      return [prefectures, cities];
    });
  await prisma.prefecture.createMany({ data: prefectures });
  await prisma.city.createMany({ data: cities });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });
