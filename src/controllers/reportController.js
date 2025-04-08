const PDFDocument = require("pdfkit");
const userModel = require("../models/userModel");

const exportUserPdf = async (req, res) => {
  try {
    const users = await userModel.getUsers();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=usuarios.pdf");

    const doc = new PDFDocument({ margin: 50 });
    doc.pipe(res);

    // Cabeçalho
    doc
      .fontSize(20)
      .font("Helvetica-Bold")
      .text("Relatório de Usuários", { align: "center" })
      .moveDown(0.5);

    doc
      .fontSize(12)
      .font("Helvetica")
      .text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, { align: "right" })
      .moveDown(1);

    // Tabela - Cabeçalho
    doc
      .fontSize(12)
      .font("Helvetica-Bold")
      .text("ID", 50, doc.y, { width: 50, align: "left" })
      .text("Nome", 100, doc.y, { width: 150, align: "left" })
      .text("E-mail", 250, doc.y, { width: 200, align: "left" })
      .text("Idade", 450, doc.y, { width: 50, align: "left" })
      .moveDown(0.5);

    doc
      .moveTo(50, doc.y)
      .lineTo(500, doc.y)
      .stroke()
      .moveDown(0.5);

    // Tabela - Dados
    users.forEach((user) => {
      doc
        .fontSize(10)
        .font("Helvetica")
        .text(user.id, 50, doc.y, { width: 50, align: "left" })
        .text(user.name, 100, doc.y, { width: 150, align: "left" })
        .text(user.email, 250, doc.y, { width: 200, align: "left" })
        .text(user.age, 450, doc.y, { width: 50, align: "left" })
        .moveDown(0.5);

      // Linha separadora entre os registros
      doc
        .moveTo(50, doc.y)
        .lineTo(500, doc.y)
        .stroke()
        .moveDown(0.2);
    });

    doc.end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao gerar o PDF" });
  }
};

module.exports = { exportUserPdf };