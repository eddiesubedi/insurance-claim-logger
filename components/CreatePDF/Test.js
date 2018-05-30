import React from 'react';
import Share from 'react-native-share';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import logoImgTag from './logoImgTag';
import Fonts from '../../utils/fonts';

const Test = (props) => {
  const getLogoHTML = () => (`
  <div style="display: flex; justify-content: flex-end; margin-bottom:5px">
    ${logoImgTag()}
  </div>
  `);
  const getHeaderHTML = (claim, insured, lossLocation, dateOfLoss, takenBy) => (`
  <div style="margin-bottom:10px">
    <div style="display: flex">
      <div style="flex: 1; text-align: right; padding: 5px; border:1px solid black; border-right: 0">
          <h4 style="margin: 0">CLAIM</h4>
          <p style="margin: 0">${claim}</p>
      </div>
      <div style="flex: 1; text-align: right; padding: 5px; border:1px solid black; border-right: 0">
          <h4 style="margin: 0">INSURED</h4>
          <p style="margin: 0">${insured}</p>
      </div>
      <div style="flex: 1; text-align: right; padding: 5px; border:1px solid black; border-right: 0">
          <h4 style="margin: 0">LOSS LOCATION</h4>
          <p style="margin: 0">${lossLocation}</p>
      </div>
      <div style="flex: 1; text-align: right; padding: 5px; border:1px solid black; border-right: 0">
          <h4 style="margin: 0">DATE OF LOSS</h4>
          <p style="margin: 0">${dateOfLoss}</p>
      </div>
      <div style="flex: 1; text-align: right; padding: 5px; border:1px solid black">
          <h4 style="margin: 0">TAKEN BY</h4>
          <p style="margin: 0">${takenBy}</p>
      </div>
    </div>
  </div>
  `);
  const getTopHTML = () => (`
    ${getLogoHTML()}
    ${getHeaderHTML(props.claim.claim, props.claim.insured, props.claim.lossLocation, props.claim.dateOfLoss, props.claim.takenBy)}
  `);
  const getDescriptionsHTML = () => (`
    ${getTopHTML()}
    ${props.claim.descriptions.map((description, index) => (
      `
          <div style="display: flex; flex-direction: row; margin-bottom: 10px">
              <div style="width:70% ;height:300px; background:url('${description.uri}'); background-size:contain; background-repeat: no-repeat; background-position: center top;"></div>
              <p style="border: 1px solid black; padding: 5px; width: 30%;margin: 0; margin-left: 20px;  align-self:flex-start">
                ${description.text}
              </p>
          </div>
          ${(Math.abs((index + 1) % 2) === 1) ? '<hr />' : ''}
          
          ${((index + 1) % 2 === 0) ? `<p style="page-break-before: always;"></p>${getTopHTML()}` : ''}
        `
    )).join('')}
  `);
  const getHTML = () => (`
    <html>
    <body>
      ${getDescriptionsHTML()}
    </body>
    </html>
  `);

  const createPDF = async () => {
    const options = {
      html: getHTML(),
      fileName: String(props.claim.claim).replace(/ /g, '_').replace(/[/\\?%*:|"<>]/g, '-'),
      directory: 'docs',
      width: 226,
      height: 800,
    };

    const file = await RNHTMLtoPDF.convert(options);
    Share.open({
      title: `${props.claim.claim} PDF`,
      message: 'Sent from DHAdusting App',
      url: `file://${file.filePath}`,
      subject: `${props.claim.claim} Claim`, //  for email
    });
  };

  return (
    <View style={styles.saveButtonContainer}>
      <TouchableOpacity
        onPress={createPDF}
        style={styles.saveButton}
      >
        <Text style={styles.saveBtnText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  saveButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#1C51FF',
    width: '70%',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
  },
  saveBtnText: {
    color: 'white',
    fontFamily: Fonts.MontserratSemiBold,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Test;
